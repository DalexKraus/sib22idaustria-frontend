import Footer from "../header/Footer";

export default function PageContentWrapper(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <div className="min-h-screen flex flex-col pl-8 pr-8 lg:pl-16 lg:pr-16 xl:pl-64 xl:pr-64">
      <div className="flex-grow pb-8">{props.children}</div>
      <Footer />
    </div>
  );
}
