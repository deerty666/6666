/* ========================= */
/* Product Card */
/* ========================= */

#menuList{
    padding:16px;
    display:flex;
    flex-direction:column;
    gap:18px;
}

.product-card{

    background:#1b1b1b;

    border:1px solid rgba(195,158,106,.25);

    border-radius:22px;

    overflow:hidden;

    box-shadow:0 10px 25px rgba(0,0,0,.35);

    transition:.3s;

}

.product-card:hover{

    transform:translateY(-4px);

    box-shadow:0 18px 40px rgba(0,0,0,.45);

}

.product-image{

    position:relative;

    height:230px;

    overflow:hidden;

    background:#111;

}

.product-image img{

    width:100%;

    height:100%;

    object-fit:cover;

}

.badge{

    position:absolute;

    top:14px;

    right:14px;

    background:#D32F2F;

    color:#fff;

    padding:7px 14px;

    border-radius:50px;

    font-size:.8rem;

    font-weight:700;

}

.product-info{

    padding:20px;

}

.product-info h3{

    margin:0;

    color:#fff;

    font-size:1.45rem;

    font-weight:800;

}

.product-info p{

    margin:8px 0;

    color:#888;

    font-size:.95rem;

}

.price{

    margin-top:18px;

    color:#c39e6a;

    font-size:2rem;

    font-weight:900;

}

.add-btn{

    width:100%;

    margin-top:20px;

    height:58px;

    border:none;

    border-radius:16px;

    background:#c39e6a;

    color:#111;

    font-size:1.2rem;

    font-weight:800;

    cursor:pointer;

}
