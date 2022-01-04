/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import axios from "axios"; 

// TEMPLATES
import HeaderFront from '../../templates/front/Header';
import FooterFront from '../../templates/front/Footer';

const CariKonten = () => {

    const search = useLocation().search;
    const find = new URLSearchParams(search).get('find');

    const endPoint = "https://api.juripebrianto.my.id/"

    const [konten, setKonten] = useState({ 
        kontenCari : [], 
    });

    useEffect(() => {
        const fetchData = async () => {
            const RESkontenCari = await axios(endPoint+"konten-cari?find="+find);
  
            setKonten({
                kontenCari : RESkontenCari.data, 
            });
        };

        fetchData();
    }, [find]);

    return (
        <>
            <HeaderFront />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-12">
                        <h5 className="font-weight-bold spanborder">
                            <span>Hasil Pencarian</span>
                        </h5>
                        {konten.kontenCari.KontenJson?.map((val) => 
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="pr-3">
                                <h2 className="mb-1 h4 font-weight-bold">
                                    <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                </h2>
                                <p dangerouslySetInnerHTML={{ __html: val.short }}></p>
                                <div className="card-text text-muted small">Juri Pebrianto</div>
                                <small className="text-muted">{val.tanggal}</small>
                            </div>
                            <img width="200" height="120" src={`https://assets.juripebrianto.my.id/${val.thumb}`} />
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <FooterFront />
        </>
    );
}

export default CariKonten;