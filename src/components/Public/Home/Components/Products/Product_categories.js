import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTrail, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { Waypoint } from "react-waypoint";

import BestSellerCard from "../Carousel/BesSeller/components/BestSellerCard";
import Card from "./Component/Card";
import { getProductByCategories } from './api';

export default function ProductCategories() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getProductByCategories({
          keyword: '',
          categories: category == 5 ? [] : [category],
          page: currentPage,
          pageSize: 12
        });

        setProducts(response.data);
        setTotalPages(Math.ceil(response.meta.total / response.meta.pageSize));
      } catch (error) {
        console.error('Failed to fetch products', error);
        setError('Une erreur est survenue lors de la récupération des produits.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, currentPage]);

  const handleCategoryChange = e => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };


  const trail = useTrail(products.length > 0 ? products.length : 0, {
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0 }
  });

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <Wrapper>
      <h1 className=" text-center">Nos Produits par Catégorie</h1>
      <div className="widthUl">
        <ul className="ulListe">
          {["1", "2", "3", "4", "5", "6"].map(cat => (
            <li key={cat} className="m-3">
              <button onClick={handleCategoryChange} value={cat} className="btn btn-dark m-2">
                {["Top", "Robe", "Jeans", "Combinaison", "All", "Accessoires"][cat - 1]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {loading && <p>Chargement des produits...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && products.length > 0 ? (
        <div className="featureCenter">
          <div className="container">
            <div className="row justify-content-center">
              <Waypoint bottomOffset="70%" onEnter={() => setProducts(products)} />
              {trail.map((style, index) => (
                <animated.div key={uuidv4()} style={style} className="col-lg-3 mb-4 d-flex justify-content-center">
                  <BestSellerCard
                    key={products[index].id}
                    category={products[index]}
                  />
                </animated.div>
              ))}
            </div>

          </div>
        </div>

      ) : (
        !loading && !error && <p>Aucun produit trouvé pour cette catégorie.</p>
      )}

      <div className="pagination m-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="btn btn-secondary"
        >
          Précédent
        </button>
        <span>Page {currentPage} sur {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn btn-secondary"
        >
          Suivant
        </button>
      </div>

    </Wrapper>
  );
}


const Wrapper = styled.div`
  .ulListe {
    list-style-type: none;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
    .featureCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }
    
  .featureCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ListProducts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Ajustement de l'espacement entre les cartes */
  gap: 20px; /* Ajoute de l'espacement uniforme entre les cartes */
  align-items: flex-start; /* Aligner les cartes en haut */
}
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .pagination span {
    margin: 0 10px;
  }
  .CardProducts {
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #70acac;
    margin: 15px;
    opacity: 1;
  }
  .photoProducts {
    padding: 20px;
    margin: 0 auto;
    border-radius: 15px;
  }
  .selectProduct {
    display: none;
  }
  @media (max-width: 950px) {
    .ulListe {
      display: none;
    }
    .selectProduct {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
