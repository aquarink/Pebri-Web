/* eslint-disable react/no-danger-with-children */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, {useState, useEffect} from 'react'
import axios from "axios"; 

// TEMPLATES
import HeaderFront from '../../templates/front/Header';
import FooterFront from '../../templates/front/Footer';

const Landing = () => {
    const endPoint = "http://localhost:8899/"

    const [konten, setKonten] = useState({ 
        randomArtikel : [], 
        randomPortofolio: [], 
        randomKonten: [], 
        artkelTerbaru: [], 
        artikelPopular: [], 
        artikelSemua: [], 
        portofolioSemua: [], 
    });

    useEffect(() => {
        const fetchData = async () => {
            const RESrandomArtikel = await axios(endPoint+"random-artikel");
            const RESrandomPortofolio = await axios(endPoint+"random-portofolio");
            const RESrandomKonten = await axios(endPoint+"random-konten");
            const RESartkelTerbaru = await axios(endPoint+"artikel-terbaru");
            const RESartikelPopular = await axios(endPoint+"artikel-popular");
            const RESartikelSemua = await axios(endPoint+"artikel-semua");
            const RESportofolioSemua = await axios(endPoint+"portofolio-semua");
  
            setKonten({
                randomArtikel : RESrandomArtikel.data, 
                randomPortofolio: RESrandomPortofolio.data, 
                randomKonten: RESrandomKonten.data, 
                artkelTerbaru: RESartkelTerbaru.data, 
                artikelPopular:RESartikelPopular.data, 
                artikelSemua: RESartikelSemua.data, 
                portofolioSemua: RESportofolioSemua.data, 
            });
        };

        fetchData();
    }, []);

    return (
        <>
        <HeaderFront />
            <div className="container">
                <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
                    <div className="pl-4 pr-0 h-100 tofront">
                        {konten.randomArtikel.KontenJson?.map((val) => 
                            <div className="row justify-content-between">
                                <div className="col-md-6 pt-6 pb-6 align-self-center">
                                    <h1 key={val.kode} className="secondfont mb-3 font-weight-bold">{val.judul}</h1>
                                    <p className="mb-3" dangerouslySetInnerHTML={{ __html: val.short }}></p>
                                    <a href={`/artikel/${val.slug}`} className="btn btn-dark">Lanjut</a>
                                </div>

                                <div className="col-md-6 d-none d-md-block pr-0" style={{ backgroundSize: 'cover', backgroundImage: `url("http://localhost:8899/${val.thumb}")` }}></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="container pt-4 pb-4">
                <div className="row">

                    {konten.randomPortofolio.KontenJson?.map((val) => 
                    <div className="col-lg-6">
                        <div className="card border-0 mb-4 box-shadow h-xl-300">
                            <div style={{ backgroundSize: 'cover', backgroundImage: `url("http://localhost:8899/${val.thumb}")`, height: '150px', backgroundRepeat: 'no-repeat' }}></div>
                            <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                                <h2 className="h4 font-weight-bold">
                                    <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                </h2>
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: val.short }}></p>
                                <div>
                                    <small className="d-block">
                                        <a className="text-muted" href={`/artikel/${val.slug}`}>Juri Pebrianto</a>
                                    </small>
                                    <small className="text-muted">{val.tanggal}</small>
                                    {/* <small className="text-muted">Dec 12 &middot; 5 min read</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    <div className="col-lg-6">
                        <div className="flex-md-row mb-4 box-shadow h-xl-300">
                        {konten.randomKonten.KontenJson?.map((val) => 
                            <div className="mb-3 d-flex align-items-center">
                                <img width="175" height="80" src={`http://localhost:8899/${val.thumb}`} />
                                <div className="pl-3">
                                    <h2 className="mb-2 h6 font-weight-bold">
                                        <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                    </h2>
                                    <div className="card-text text-muted small">Juri Pebrianto</div>
                                    <small className="text-muted">{val.tanggal}</small>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-8">
                        <h5 className="font-weight-bold spanborder">
                            <span>Semua Artikel</span>
                        </h5>
                        {konten.artikelSemua.KontenJson?.map((val) => 
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="pr-3">
                                <h2 className="mb-1 h4 font-weight-bold">
                                    <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                </h2>
                                <p dangerouslySetInnerHTML={{ __html: val.short }}></p>
                                <div className="card-text text-muted small">Juri Pebrianto</div>
                                <small className="text-muted">{val.tanggal}</small>
                            </div>
                            <img width="222" height="120" src={`http://localhost:8899/${val.thumb}`} />
                        </div>
                        )}
                    </div>
                    <div className="col-md-4 pl-4">
                        <h5 className="font-weight-bold spanborder">
                            <span>Popular</span>
                        </h5>
                        <ol className="list-featured">
                            
                            {konten.artikelPopular.KontenJson?.map((val) => 
                            <li style={{marginTop: 20}}>
                                <span>
                                    <h6 className="font-weight-bold">
                                    <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                    </h6>
                                    <p className="text-muted">Juri Pebrianto</p>
                                </span>
                            </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
            <FooterFront />
        </>
    );
}

export default Landing;