import { Suspense, lazy } from 'react';
import CountCard from './CountCard';
const ImgCard = lazy(() => import('./ImgCard'));

const Cards = ({ items }) => {
	return (
		<div className='grid md:grid-cols-3'>
			{items.map(({ id, name, nameProduct, description, price, url }) => (
				<div
					key={id}
					className='shadow-2xl grid justify-centerm-2 rounded-lg py-3 m-4'
				>
					<Suspense
						fallback={
							<h4 className='text-base font-semibold text-center'>
								Loading...
							</h4>
						}
					>
						<ImgCard url={url} name={name} />
					</Suspense>

					<div className='bg-gray-800 p-3 mt-4 rounded-lg m-2'>
						<div className='font-semibold text-xl text-white text-center'>
							{nameProduct}
						</div>
						<div className='flex justify-between text-white'>
							<div className='font-semibold text-xl'>{name}</div>
							<div className='flex items-center text-gray-50 font-semibold'>
								${price}
							</div>
						</div>
						<div className='font-semibold flex flex-col bg-gray-100 rounded-md p-1 mt-2'>
							Descripci&oacute;n: <p>{description}</p>
						</div>
					</div>
					<CountCard
						id={id}
						name={name}
						price={price}
						description={description}
						url={url}
						nameProduct={nameProduct}
					/>
				</div>
			))}
		</div>
	);
};

export default Cards;
