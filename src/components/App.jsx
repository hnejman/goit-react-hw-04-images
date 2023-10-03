import React, { useState, useEffect } from 'react';
import { getFromAPI } from 'getFromAPI';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import 'components/styles.css';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [data, setData] = useState([]);
  const [pageNr, setPageNr] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [key] = useState('33400250-146930462e7f20f0c64c3f7c9');
  const [modal, setModal] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const escFunction = (event) => {
    if (event.code === "Escape" && isModal) {
      closeModal();
    }
  };
  

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [isModal]);

  const search = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.input.value;
    setSearchValue(value);
    setIsLoading(true);

    getFromAPI(value, key, 1)
      .then((response) => {
        setData(response);
        setPageNr(2);
        setIsLoading(false);
        let btn = false;
        if (response.data.totalHits>15) {
          btn = true;
        }
        setIsButton(btn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadModal = (e) => {
    setModal(e.target.id);
    setModalAlt(e.target.alt);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const nextPage = () => {
    setPageNr((prevPageNr) => prevPageNr + 1);
    setIsLoading(true);

    getFromAPI(searchValue, key, pageNr)
      .then((response) => {
        setData((prevData) => prevData.concat(response));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='App'>
      <Searchbar search={search} />
      <ImageGallery gallery={data} loadModal={loadModal} />
      {isLoading && <Loader />}
      {isButton && <Button next={nextPage} />}
      {isModal && (
        <Modal
          modalSrc={modal}
          modalAlt={modalAlt}
          closeModal={closeModal}
          onKeyDown={escFunction}
        />
      )}
    </div>
  );
}

export default App;