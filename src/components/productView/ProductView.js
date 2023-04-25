import React from "react";
import useApi from "../../hooks/useApi";
import { Backdrop, CircularProgress } from "@mui/material";

function ProductView() {
  const { data, isLoading, error } = useApi("/product/6781/");

  return (
    <div className="p-[4%] grid gap-6">
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <div className="w-[50%] m-auto grid gap-1 bg-[#fff] p-[1%] items-center justify-center">
            <img
              src={data?.user?.profilePicture}
              alt=""
              className="rounded-lg h-[4rem]"
            />
            <div className="">
              <p className="text-xl font-medium my-0">
                <span className="text-xs font-medium">
                  {data?.user?.firstName}
                </span>
              </p>
              <p className="text-sm font-light my-0">{data?.company?.name}</p>
            </div>
          </div>
          <div className="md:flex grid gap-12 bg-[#fff] p-[4%]">
            <img src={data?.picture} alt="" className=" h-[20rem]" />
            <div className="">
              <p className="text-xl font-medium my-3">
                {data?.name}
                <span className="text-xs font-medium ml-3">
                  {"("}
                  {data?.type?.name}
                  {")"}
                </span>
              </p>
              <p className="text-sm font-light">{data?.description}</p>
            </div>
          </div>
          <div className="flex gap-[10%] flex-wrap bg-[#fff] px-[4%] py-[2%]">
            <div className="mt-3">
              <p>Business Models</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {data?.businessModels.map((model, i) => (
                  <span
                    key={i}
                    className="font-light text-sm py-1 px-2 rounded bg-[#8a93cb] text-[#fff] "
                  >
                    {model.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <p>Technologies/Categories</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {data?.categories.map((model, i) => (
                  <span
                    key={i}
                    className="font-light text-sm py-1 px-2 rounded bg-[#8a93cb] text-[#fff] "
                  >
                    {model.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <p>Investment Effort / Cost</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="font-light text-sm py-1 px-2 rounded bg-[#8a93cb] text-[#fff] ">
                  {data?.investmentEffort}
                </span>
              </div>
            </div>
            <div className="mt-3">
              <p>TRL</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="font-light text-sm py-1 px-2 rounded bg-[#8a93cb] text-[#fff] ">
                  {data?.trl?.name}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] px-[4%] py-[2%]">
            <iframe
              className="md:w-[70vw] md:h-[50vh] m-[auto]"
              src={`https://www.youtube.com/embed/${data?.video.split("=")[0]}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductView;
