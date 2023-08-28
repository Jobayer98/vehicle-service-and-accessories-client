import Banner from "../../../components/Banner/Banner";
import Card from "../../../components/UI/Card/Card";
import useFetch from "../../../hooks/useFecth";

const BikeServicesPkg = () => {
  const [data] = useFetch("http://localhost:9000/bikeServices");
  return (
    <>
      <Banner path1={"Home"} path2={"Bike"} title={"Available Bike Services"} />
      <div className="max-w-5xl mx-auto my-16">
        <h1 className="text-3xl font-bold">Bike Service Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-12 ">
          {data.map((item) => {
            return <Card key={item._id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BikeServicesPkg;
