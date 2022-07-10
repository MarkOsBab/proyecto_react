import {TbError404} from 'react-icons/tb';
function NotFound()
{
    return(
        <div className='notFound'>
            <TbError404 size={300}/>
            <h1>NO SE ENCONTRO</h1>
        </div>
    );
}

export default NotFound;