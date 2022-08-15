import Link from "next/link";

const ROUTE_INFO = [
  {
    path: "/",
    label: "Blog",
  },
  {
    path: "/",
    label: "About",
  },
  {
    path: "/",
    label: `Let's  ${"  "}  Meet`,
  },
  {
    path: "/",
    label: "Buy me a coffee",
  },
];

const AppNav = () => {
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-primary underlined focus:outline-none block whitespace-nowrap text-3xl font-medium transition">
              <h1 className="tracking-widest">Rosemary Ekong</h1>
            </a>
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {ROUTE_INFO.map((route) => (
            <li className="px-5 py-2" key={route.label}>
              <Link href={route.path}>
                <a className="underlined tracking-wider focus:outline-none block whitespace-nowrap text-xl font-medium hover:text-white focus:text-white text-secondary">{route.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AppNav;
