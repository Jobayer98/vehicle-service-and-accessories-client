import TeamCard from "../../../components/UI/Card/TeamCard";
import img from "../../../assets/images/team/1.jpg";

const OurTeam = () => {
  const arry = [{id: 1, name: "Alice"},{id: 2, name: "Bob"},{id: 3, name: "John"}];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Team Members</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-screen-xl">
        {arry.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            profession={"Engine Expert"}
            img={img}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
