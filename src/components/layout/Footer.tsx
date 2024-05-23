import Link from "next/link";
import { siteConfig } from "~/config/site";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="sm:container p-3 mx-auto sm:flex sm:justify-between items-center text-center ">
        <div>
          <small>Copyright ©2019 Mustfintech, Inc.</small>
        </div>
        <div>
          <small>
            <span className="mr-1">Developed with ♥ by</span>
            <Link
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Huzaifa Rehan
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
