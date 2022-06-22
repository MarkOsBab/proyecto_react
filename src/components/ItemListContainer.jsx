import ItemCart from './ItemCart';
import service1 from './../images/services/service1.png';
import service2 from './../images/services/service2.png';
import service3 from './../images/services/service3.png';
function ItemListContainer()
{
    return (
        <div className='container'>
            <h2 className='list--title'>Lista de servicios</h2>
            <div className='list'>
                <ItemCart service={service1} />
                <ItemCart service={service2} />
                <ItemCart service={service3} />
            </div>
        </div>
    );
}

export default ItemListContainer;