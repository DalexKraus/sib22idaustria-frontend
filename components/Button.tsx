export function Button({
  children,
  center,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  center?: boolean;
}>) {
  return (
    <div className={(center !== undefined ? center : true) ? "flex justify-center" : ""}>
      <button
        onClick={onClick}
        className="text-primary border border-primary hover:bg-primary hover:text-white font-bold py-2 px-4"
      >
        {children}
      </button>
    </div>
  );
}

export function DownloadButton({
  children,
  url,
  center,
}: Readonly<{
  children: React.ReactNode;
  url: string;
  center?: boolean;
}>) {
  return (
    <div className={(center !== undefined ? center : true) ? "flex justify-center" : ""}>
      <a
        href={url}
        className="text-primary border border-primary hover:bg-primary hover:text-white font-bold py-2 px-4"
        download
      >
        {children}
      </a>
    </div>
  );
}

export function LinkButton({
    children,
    url,
    center
  }: Readonly<{
    children: React.ReactNode;
    url: string;
    center?: boolean;
  }>) {
    return (
        <div className={(center !== undefined ? center : true) ? "flex justify-center" : ""}>
        <a
          href={url}
          className="text-primary border border-primary hover:bg-primary hover:text-white font-bold py-2 px-4"
        >
          {children}
        </a>
      </div>
    );
  }
  