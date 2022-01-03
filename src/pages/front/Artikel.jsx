/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, {useState, useEffect} from 'react'
import axios from "axios"; 

// TEMPLATES
import HeaderFront from '../../templates/front/Header';
import FooterFront from '../../templates/front/Footer';

const Artikel = () => {

    const endPoint = "http://localhost:8899/"

    const [konten, setKonten] = useState({ 
        semuaArtikel : [], 
    });

    useEffect(() => {
        const fetchData = async () => {
            const RESsemuaArtikel = await axios(endPoint+"artikel-semua");
  
            setKonten({
                semuaArtikel : RESsemuaArtikel.data, 
            });
        };

        fetchData();
    }, []);

    return (
        <>
            <HeaderFront />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-12">
                        <h5 className="font-weight-bold spanborder">
                            <span>Semua Artikel</span>
                        </h5>
                        {konten.semuaArtikel.KontenJson?.map((val) => 
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="pr-3">
                                <h2 className="mb-1 h4 font-weight-bold">
                                    <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                </h2>
                                <p dangerouslySetInnerHTML={{ __html: val.short }}></p>
                                <div className="card-text text-muted small">Juri Pebrianto</div>
                                <small className="text-muted">{val.tanggal}</small>
                            </div>
                            <img width="200" height="120" src={`http://localhost:8899/${val.thumb}`} />
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <FooterFront />
        </>
    );
}

export default Artikel;