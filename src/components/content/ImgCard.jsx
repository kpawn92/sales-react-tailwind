const ImgCard = ({ url, name }) => {
	return (
		<div className='flex justify-center bg-gray-50 rounded-lg py-4'>
			<img src={url} alt={name} className='rounded-2xl' width={'200'} />
		</div>
	);
};

export default ImgCard;
