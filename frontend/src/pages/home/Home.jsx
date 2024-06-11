import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar className='w-full sm:w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5'/>
			<MessageContainer className='flex-grow'/>
		</div>
	);
};
export default Home;
