export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pb-16 pt-48 dark:border-gray-600">
      <div className="relative mx-10vw">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full mt-24 text-lg text-gray-500 dark:text-slate-500 md:mt-44">
            <span>All rights reserved</span>
            <span className="block md:inline">© Rosemary John {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
