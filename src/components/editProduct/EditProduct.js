import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import CancelIcon from "@mui/icons-material/Cancel";

function EditProduct() {
  const { data, isLoading, error } = useApi("/product/6781/");
  const trlData = useApi("/trl/");
  const [desc, setDesc] = useState();
  const [trl, setTrl] = useState([]);

  return (
    <div className="p-[4%] grid gap-6">
      <div className="md:flex grid gap-12 bg-[#fff] p-[4%] md:w-[75vw] w-[92vw] m-auto">
        <img src={data?.picture} alt="" className=" h-[20rem]" />
        <div className="w-full">
          <p className="text-xl font-medium my-3">
            {data?.name}
            <span className="text-xs font-medium ml-3">
              {"("}
              {data?.type?.name}
              {")"}
            </span>
          </p>
          <textarea
            className="text-xs font-light p-2 h-[35vh] w-[100%] border-2 border-gray-500"
            value={desc || data?.description}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-[10%] flex-wrap bg-[#fff] px-[4%] py-[2%]">
        <div className="mt-3">
          <div className="flex">
            <p>TRL</p>{" "}
            <select
              value={trl}
              onChange={(e) => setTrl([...trl, e.target.value])}
              className="w-full text-black border-2 border-gray-500 ml-4"
            >
              {trlData?.data?.map((item, i) => (
                <option value={item.name} key={i}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            {trl.map((item, i) => (
              <div>
                <span className="font-light text-sm py-1 px-2 rounded bg-[#8a93cb] text-[#fff] ">
                  {item}
                </span>
                <span
                  onClick={() =>
                    setTrl(trl.filter((allItem) => allItem !== item))
                  }
                >
                  <CancelIcon />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fff] px-[4%] py-[2%]">
        <p>Video Link</p>
        <input
          placeholder="Add a youtube or vimeo link"
          className="border-2 border-gray-200 w-[100%] p-2 mt-3"
        />
      </div>
    </div>
  );
}

export default EditProduct;
