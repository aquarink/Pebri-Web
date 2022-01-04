/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, {useState, useEffect} from 'react'
import { useParams, } from 'react-router'
import axios from "axios"; 

// TEMPLATES
import HeaderFront from '../../templates/front/Header';
import FooterFront from '../../templates/front/Footer';

const ArtikelDetail = () => {

    const { slug } = useParams();

    const endPoint = "https://api.juripebrianto.my.id/"

    const [konten, setKonten] = useState({ 
        detailArtikel : [], 
        randomArtikel6: [], 
    });

    useEffect(() => {
        const fetchData = async () => {
            const RESdetaikArtikel = await axios(endPoint+"detail-artikel?id="+slug);
            const RESrandomArtikel6 = await axios(endPoint+"random-artikel6");
  
            setKonten({
                detailArtikel : RESdetaikArtikel.data, 
                randomArtikel6: RESrandomArtikel6.data, 
            });
        };

        fetchData();

        let viewTimer = setTimeout(() => countDown(slug), 5 * 1000);
        
        return () => {
            clearTimeout(viewTimer);
          };
    }, [slug]);

    const countDown = async (slg) => {
        console.log("View : "+slg)
        await axios(endPoint+"view?id="+slg);
        return ""
    }

    return (
        <>
            <HeaderFront />
            <div className="container">
                {konten.detailArtikel.KontenJson?.map((val) => 
                <div className="row justify-content-between">
                    <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                        <p className="text-uppercase font-weight-bold">
                            <a  className="text-danger" href="/artikel">Artikel</a>
                        </p>
                        <h1 className="display-4 secondfont mb-3 font-weight-bold">{val.judul}</h1>
                        {/* <p className="mb-3">
                            Analysts told CNBC that the currency could hit anywhere between $1.35-$1.40 if the deal gets passed through the U.K. parliament.
                        </p> */}
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src="https://cdn.dribbble.com/users/1418633/screenshots/4872860/media/90d80cd5fa8681c0667cd83123780698.png" width="70" />
                            <small className="ml-2">Juri Pebrianto <span className="text-muted d-block">{val.tanggal}</span>
                            </small>
                        </div>
                    </div>
                    <div className="col-md-6 pr-0">
                        <img src={`https://assets.juripebrianto.my.id/${val.thumb}`} />
                    </div>
                </div>
                )}
            </div>
                        
            <div className="container pt-4 pb-4">
                {konten.detailArtikel.KontenJson?.map((val) => 
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-12">
                        <article className="article-post" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: val.isi }}></article>
                        <div className="border p-5 bg-lightblue" style={{marginTop: 100}}>
                            <div className="row justify-content-between">
                                <div className="col-md-12 mb-2 mb-md-0">
                                    <h5 className="font-weight-bold secondfont">Saya berharap</h5>
                                    Tulisan ini dapat bermanfaat bagi anda, terima kasih.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>

            <div className="container pt-4 pb-4">
                <h5 className="font-weight-bold spanborder"><span>Baca Juga</span></h5>
                <div className="row">
                        {/* <div className="flex-md-row box-shadow h-xl-300"> */}
                        {konten.randomArtikel6.KontenJson?.map((val) => 
                        <div className="col-md-4 mb-3 d-flex align-items-center">
                            <img width="135" height="80" src={`https://assets.juripebrianto.my.id/${val.thumb}`} />
                            <div className="pl-3">
                                <h2 className="mb-2 h6 font-weight-bold">
                                    <a key={val.kode}  className="text-dark" href={`/artikel/${val.slug}`}>{val.judul}</a>
                                </h2>
                                <div className="card-text text-muted small">Juri Pebrianto</div>
                                <small className="text-muted">{val.tanggal}</small>
                            </div>
                        </div>
                        )}
                    {/* </div> */}
                </div>
            </div>
            <FooterFront />
        </>
    );
}

export default ArtikelDetail;