import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubcribed, setIsSubscribed] = useState(false);

  const handleSubsScription = () => {
    setIsSubscribed(true);

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, model]);
    toast.success("Item added to cart!");
  };

  return (
    <div className="shadow-lg max-w-11/12 mx-auto rounded-lg border overflow-hidden border-zinc-300">
      <div className="flex justify-between p-4">
        <div>{model.icon} </div>
        <div className="py-1 px-5 rounded-full bg-[#dda882]"> {model.tagType} </div>
      </div>

      <div className="p-4 space-y-3">
      <h3 className="text-[#101727] text-2xl font-bold">{model.name} </h3>

        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
        <div className="text-2xl font-bold">${model.price}/month</div>
        <div className="text-sm font-regular"> {model.features}</div>
        <button
          onClick={handleSubsScription}
          className="btn w-full bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#9514FA] text-white rounded-lg mt-5"
        >
          {isSubcribed ? "Buy" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
