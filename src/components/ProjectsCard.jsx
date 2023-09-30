/* eslint-disable react/prop-types */
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldHeart } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
    return (
        <article className='bg-slate-50 rounded-lg shadow-md hover:shadow-2xl duration-300'>
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-lg h-56'
            />
            <div className='capitalize p-6'>
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-2 text-slate-800 leading-loose'>{text}</p>

                <div className='mt-3 flex gap-x-4'>
                    <a href={url}>
                        <TbWorldHeart className='h-8 w-8 text-rose-500 hover:text-rose-800 duration-300' />
                    </a>
                    <a href={github}>
                        <FaGithubSquare className='h-8 w-8 text-rose-500 duration-300 hover:text-rose-800' />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectsCard;
