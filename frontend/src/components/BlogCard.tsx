import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName : string;
    title: String;
    content: String;
    publishedDate : String
    id:number
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
} : BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-400 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col">
            <Avatar name={authorName}/>
            </div>
           <div className="flex justify-center flex-col font-extralight pl-2"> {authorName}</div>
           <div className="flex justify-center flex-col pl-2 " ><Circle /></div>
           <div className="pl-2 flex justify-center flex-col font-thin text-slate-400 "> {publishedDate}</div>  

        </div>
        <div className="text-xl font-semibold ">
            {title}
        </div>
        <div className="text-md font-semibold ">
            {content.slice(0,150) + "....."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
        <div ></div>
        
    </div>
    </Link>
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}
export function Avatar({name} : {name : string}){
    return <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-black rounded-full dark:bg-gray-600">
    <span className=" font-light text-white dark:text-red-300">{name[0]}</span>
</div>
}