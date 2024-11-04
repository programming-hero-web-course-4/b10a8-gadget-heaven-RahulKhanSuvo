import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-6">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#9538E2] font-extrabold text-white  w-36 px-5 py-2 rounded-full"
            : ""
        }
        to={"/"}
      >
        All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#9538E2] font-extrabold text-white  w-36 px-5 py-2 rounded-full"
              : "w-36 px-5 py-2 rounded-full bg-[#F2F2F3]"
          }
          to={`/category/${category.slug}`}
          key={category.id}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
