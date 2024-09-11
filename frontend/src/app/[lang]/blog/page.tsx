"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../utils/fetch-api";

import Loader from "../components/Loader";
import Blog from "../views/blog-list";
import PageHeader from "../components/PageHeader";

import { AreaStackedChart } from "../components/charts/AreaStackedChart";


interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Profile() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/articles`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          cover: { fields: ["url"] },
          category: { populate: "*" },
          authorsBio: {
            populate: "*",
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[] ) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div>
      <PageHeader heading="Medio Físico" text="" />

    <section className="m:py-12 lg:py-24 mx-12">

      <div className="container mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px]">
      <h3>Nuestro Compromiso</h3> </div>
      <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[400px] xl:min-w-[475px]">
      <p>Texto de prueba. Agregar aquí suficiente texto como para justificar la sección. Lo ideal sería explicar a qué nos referimos cuando decimos "Medio Físico" y qué es lo que queremos lograr como impacto final.</p>
      </div>

      </div>

      <div className="lg:py-24 m:py-12 flex justify-center">
      <h4>Ejemplo de grafico:</h4></div>
      <div className="w-full h-96 max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[1200px] xl:min-w-[900px] rounded-2xl overflow-hidden shadow-lg">
      <AreaStackedChart></AreaStackedChart>
      </div>

      </section>


      <Blog data={data}>
        {meta!.pagination.start + meta!.pagination.limit <
          meta!.pagination.total && (
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
              onClick={loadMorePosts}
            >
              Cargar más contenido...
            </button>
          </div>
        )}
      </Blog>

    </div>
  );
}
