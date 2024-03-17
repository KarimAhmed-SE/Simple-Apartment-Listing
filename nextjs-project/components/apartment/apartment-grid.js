import ApartmentItem from "./apartment-item";

export default function ApartmentGrid({ apartments }) {
  <ul className="list-none w-full grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
    {apartments.map((apartment) => {
      return (
        <li key={apartment._id}>
          <ApartmentItem {...apartment} />
        </li>
      );
    })}
  </ul>;
}
