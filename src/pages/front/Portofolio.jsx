/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, {useState, useEffect} from 'react'
import axios from "axios"; 

// TEMPLATES
import HeaderFront from '../../templates/front/Header';
import FooterFront from '../../templates/front/Footer';

const Portofolio = () => {

    const endPoint = "https://api.juripebrianto.my.id/"

    const [konten, setKonten] = useState({ 
        semuaPortofolio : [], 
    });

    useEffect(() => {

        document.title = "Portofolio - Juri Pebrianto"

        const fetchData = async () => {
            const RESsemuaPortofolio = await axios(endPoint+"portofolio-semua");
  
            setKonten({
                semuaPortofolio : RESsemuaPortofolio.data, 
            });
        };

        fetchData();
    }, []);

    return (
        <>
            <HeaderFront />
            <div className="container">
                <div className="row justify-content-between">
                    {konten.semuaPortofolio.KontenJson?.map((val) => 
                    <div className="col-lg-6">
                        <div className="card border-0 mb-4 box-shadow h-xl-300">
                            <div style={{ backgroundSize: 'cover', backgroundImage: `url("https://assets.juripebrianto.my.id/${val.thumb}")`, height: '150px', backgroundRepeat: 'no-repeat' }}></div>
                            <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                                <h2 className="h4 font-weight-bold">
                                    <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                </h2>
                                <p className="card-text">{val.tanggal}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <FooterFront />
        </>
    );
}

export default Portofolio;