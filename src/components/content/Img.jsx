const Img = ({ url, name }) => {
	return (
		<div className='rounded-lg flex justify-center'>
			<img src={url} alt={name} className='rounded-2xl' width={200} />
		</div>
	);
};

export default Img;
