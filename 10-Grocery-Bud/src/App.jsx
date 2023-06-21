import React, { useEffect, useState } from "react";

const handleLocalStorage = () => {
  let items = localStorage.getItem("list");
  if (items) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(handleLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    const data = { id: new Date().getMilliseconds(), title: input };

    if (!input) {
      // Show Alert if empty input is submitted
      ShowAlert(true, "Enter Valid Value", "Danger");
    } else if (input && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: input };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditId(null);
      setInput("");
      ShowAlert(true, "Item Updated", "Success");
      // show alert if something is successfully updated
    } else {
      ShowAlert(true, "Item Added", "Success");
      setList([...list, data]);
    }
  };

  const handleDelete = (id) => {
    ShowAlert(true, "Item Removed", "Danger");
    const filter = list.filter((item) => item.id !== id);
    setList(filter);
  };

  const handleEdit = (id) => {
    const CurrentIteam = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setInput(CurrentIteam.title);
  };

  const handleClear = () => {
    ShowAlert(true, "List Cleared", "Danger");
    setList([]);
  };

  const ShowAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      ShowAlert();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <main>
      <h1 className="mt-8 text-center font-Roboto text-4xl font-medium text-blue-900">
        Grocery Bud
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto my-9 flex w-fit flex-col items-center justify-center gap-4 rounded-[2.5rem] bg-slate-50 p-4 sm:flex-row sm:rounded-full">
          <input
            type="text"
            className="group rounded-full bg-slate-200 px-4 py-3 font-Roboto text-lg font-semibold"
            value={input}
            placeholder="Add Items"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3 font-Poppins text-lg font-semibold text-lime-900 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-200 hover:text-lime-800 hover:shadow-lg"
            type="submit"
          >
            {!isEditing && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            )}
            {isEditing && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            )}
            {isEditing ? "Edit" : "Add"}
          </button>
        </div>
      </form>

      <section className="list-box mx-auto max-w-[1000px] px-4 font-Poppins font-medium">
        <div
          className={`mx-auto mb-8 w-fit px-6 py-3 font-Poppins text-base font-medium transition-all duration-300 ease-in-out sm:px-8 sm:text-lg ${
            alert.type === "Success"
              ? "rounded-full bg-lime-100 text-lime-500"
              : "rounded-full bg-red-100 text-red-500"
          } ${
            alert.show ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {alert.message}
        </div>

        {list.map((items) => {
          return (
            <article
              key={items.id}
              className="mb-4 flex items-center justify-center gap-20 rounded-full bg-slate-100 p-2"
            >
              <p className="font-Roboto text-lg font-medium capitalize sm:text-xl">
                {items.title}
              </p>
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => handleEdit(items.id)}
                  className="group aspect-square rounded-full bg-blue-50 px-2 py-1 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg sm:px-3 sm:py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 fill-blue-500 transition-all duration-300 group-hover:fill-blue-600 sm:h-6 sm:w-6"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(items.id)}
                  className="group aspect-square rounded-full bg-red-50 px-2 py-1 transition-all duration-300 hover:-translate-y-1 hover:bg-red-100 hover:shadow-lg sm:px-3 sm:py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 fill-red-500 transition-all duration-300 group-hover:fill-red-600 sm:h-6 sm:w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </article>
          );
        })}

        {list.length > 1 && (
          <button
            onClick={handleClear}
            className=" group mx-auto mb-4 flex items-center gap-2 rounded-full bg-red-100 px-6 py-3 font-Poppins text-base font-medium text-red-500 transition-all duration-300 hover:bg-red-200 sm:gap-4 sm:px-8 sm:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 fill-red-500 transition-all duration-300 group-hover:fill-red-600 sm:h-6 sm:w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
            Clear All
          </button>
        )}
      </section>
    </main>
  );
}
