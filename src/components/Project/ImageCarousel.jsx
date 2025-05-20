import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ImageCarousel = ({ project, projectId, openFullscreen, setActiveIndex }) => {
  if (!project?.images?.length) return null;
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      style={{ width: '100%', height: '100%', borderRadius: '12px', marginBottom: '20px', maxWidth: '600px', maxHeight: '400px' }}
    >
      {project.images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.url}
            alt={`Project ${projectId} Image ${index + 1}`}
            onClick={() => openFullscreen(index)}
            style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageCarousel;
