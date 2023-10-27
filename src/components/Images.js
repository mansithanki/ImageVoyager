import { useContext } from "react"
import { ImageContext } from "../App"
import Image from "./Image";
import Card from "./Card";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center mt-6 text-2xl font-bold">
  Results for <span className="underline">{searchImage || 'Puppies'}</span>
</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
  {isLoading ? <Card item={10} /> : response.map((data, key) => <Image key={key} data={data} />)}
</div>

    </>
  )
}

export default Images