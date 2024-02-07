import ReactPlayer from 'react-player'

interface VideoComponentProps {
    videoUrl: string;
}

export const VideoComponent: React.FC<VideoComponentProps> = ({videoUrl}) => (
    <ReactPlayer
    className='react-player'
    url={videoUrl}
    playing
    controls
    width='100%'
    height='100%'
/>

);
