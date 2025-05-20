import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '@emotion/react';

const ImageCarousel = ({ project, projectId, openFullscreen, setActiveIndex }) => {
  const theme = useTheme();

  if (!project?.images?.length) return null;
  
  return (
    <Box
      sx={{
        width: '100%',
        mb: 2,
        maxWidth: { xs: '100%', sm: '600px' },
      }}
    >
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        sx={{
          width: '100%',
          borderRadius: '12px',
          '& .swiper-button-next, & .swiper-button-prev': {
            display: { xs: 'none', sm: 'flex' },
            color: theme.palette.primary.main,
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: theme.palette.primary.main,
          },
          height: { 
            xs: '250px', 
            sm: '320px', 
            md: '400px' 
          },
        }}
      >
        {project.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={image.url}
              alt={`Project ${projectId} Image ${index + 1}`}
              onClick={() => openFullscreen(index)}
              sx={{
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageCarousel;