import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface ImageZoomProps {
    imageUrl: string;
    altProduct: string
}

const ImageZoom = ({ imageUrl, altProduct }: ImageZoomProps) => (
    <PhotoProvider>
        <PhotoView src={imageUrl}>
            <img
                src={imageUrl}
                alt={altProduct}
                style={{ cursor: 'zoom-in' }}
            />
        </PhotoView>
    </PhotoProvider>
);

export default ImageZoom;
