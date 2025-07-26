
import bookCleanCode from "../../../public/assets/images/books/clean-code.jpg"
import bookAssembly from "../../../public/assets/images/books/assembly-x64.jpg"
import bookJs from "../../../public/assets/images/books/js.jpg"
import bookNext from "../../../public/assets/images/books/next.jpg"
import bookOperating from "../../../public/assets/images/books/operating.jpg"
import bookDesign from "../../../public/assets/images/books/sw-desing.jpg"
import bookNature from "../../../public/assets/images/books/nature-code.jpg"
import Image, { StaticImageData } from "next/image"

const books = [
  { img: bookCleanCode, title: "Clean Code" },
  { img: bookAssembly, title: "Beginning x64 Assembly Programming" },
  { img: bookJs, title: "ECMASCRIPT 6" },
  { img: bookNext, title: "Full-Stack React, TypeScript, and Node" },
  { img: bookOperating, title: "Operating System Concepts Essentials" },
  { img: bookDesign, title: "A Philosophy of Software Design" },
  { img: bookNature, title: "The Nature of Code" },
  // itd.
]

type Book = {
  img: StaticImageData
  title: string
}

type ShelfKey = "A" | "B" | "C"

type BookShelfProps = {
  shelfKey: ShelfKey
}

type Shelf = {
  [key in ShelfKey]?: {
    books: Book[]
  }
}


const shelfs: Shelf = {
  "A": {
    books: [books[0], books[1], books[2], books[3]]
  },
  "B": {
    books: [books[4], books[5], books[6]]
  }
}

export function BookShelf({ shelfKey }: BookShelfProps) {
  const shelf = shelfs[shelfKey];

  if (!shelf) return null;

  return (
    <div className="flex flex-col gap-1 w-max">
      <div className="flex items-center gap-10 px-6">
        {shelf.books.map((book) => (
          <Book3D key={book.title} img={book.img} title={book.title} />
        ))}
      </div>
      <div className="w-full h-[20px] bg-black/5 shadow-xl" />
    </div>
  );
}

function Book3D({ img, title, className, idx }: { img: StaticImageData, title: string, className?: string, idx?: number }) {


  return (
    <div className={` book-container ${className ?? ""} `}
    // style={{ left: `${idx * 200}px` }}
    >
      <div className="book">
        <Image src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* <p className="text-center text-sm mt-2">{title}</p> */}
    </div>
  )
}