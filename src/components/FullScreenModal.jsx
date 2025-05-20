import { Box, IconButton, Modal, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ModalContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
}));

const FullScreenModal = ({ isOpen, onClose, project, projectId, activeIndex }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContainer>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#fff',
            zIndex: 999,
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Swiper
          initialSlide={activeIndex}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{ width: '100%', height: '100%' }}
        >
          {project?.images?.map((image, index) => (
            <SwiperSlide key={`full-${index}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src={image.url}
                alt={`Fullscreen Project ${projectId} Image ${index + 1}`}
                sx={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'contain',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ModalContainer>
    </Modal>
  );
};

export default FullScreenModal;
