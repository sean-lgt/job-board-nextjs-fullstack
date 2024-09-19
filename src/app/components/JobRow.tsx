import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute cursor-pointer top-4 right-4">
          <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
        </div>
        <div className="flex grow gap-4">
          <div className="content-center w-12 basis-12 shrink-0">
            <img className="size-12" src="https://www.pngfind.com/pngs/m/122-1227017_spotify-icon-png-circle-spotify-logo-png-transparent.png"/>
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div>
                <div className="hover:underline text-gray-500 text-sm">spotify</div>
              </div>
              <div className="font-bold text-lg mb-1">
                <div className="hover:underline">product designer</div>
              </div>
              <div className="text-gray-400 text-sm capitalize">
                Romote &middot; New York &middot; Full-time
              </div>
            </div>
            <div className="content-end text-gray-500 text-sm">2 week ago</div>
          </div>
        </div>
      </div>
    </>
  )
  
}