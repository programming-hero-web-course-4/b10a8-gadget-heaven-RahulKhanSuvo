import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-wrap justify-center md:flex-col gap-3 rounded-lg bg-white p-2 md:p-6">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#9538E2] text-sm font-extrabold text-white   md:w-36  px-5 py-2 rounded-full"
            : "md:w-36 md:px-5 px-1 py-2 text-sm rounded-full bg-[#F2F2F3]"
        }
        to={"/"}
      >
        {" "}
        All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#9538E2] text-sm  font-normal md:font-extrabold text-white   md:w-36   md:px-5 px-2 py-2 rounded-full"
              : "md:w-36 md:px-5  px-1 py-2 text-sm rounded-full bg-[#F2F2F3]"
          }
          to={`/category/${category.category}`}
          key={category.id}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
