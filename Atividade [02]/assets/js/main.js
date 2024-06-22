$(document).ready(function () {

var liquidificadores = [
    {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-philco-ph900-preto-com-filtro-12-velocidades-1200w/magazineluiza/021749000/b0237589c56370472c8433e02e6398d1.jpg',
        name: 'Liquidificador Philco PH900 Preto com Filtro 12 Velocidades 1200W',
        lastPrice: 'R$ 259,90',
        price: 'R$ 139,00',
        sub: 'NO PIX',
        parcel: 'ou R$ 139,00 em 2x de R$ 69,50 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-mondial-turbo-inox-l-1200-ri-com-filtr-com-filtro-12-velocidades-1200w/magazineluiza/221537600/a43fd6505e3d21e453c028c5f41b1598.jpg',
        name: 'Liquidificador Mondial Turbo Inox L-1200 RI com Filtr',
        lastPrice: 'R$ 289,90',
        price: 'R$ 154,23',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 179,00 em 2x de R$ 89,50 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-mondial-turbo-l-1200-bi-com-filtro-12-velocidades-1200w-inox-preto/magazineluiza/224207100/9801fbec3c9db79471f4fd08c6a5ce7b.jpg',
        name: 'Liquidificador Mondial Turbo L-1200 BI com Filtro 12 Velocidades 1200W Inox Preto',
        lastPrice: 'R$ 249,90',
        price: 'R$ 173,63',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 179,00 em 2x de R$ 89,50 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-arno-power-mix-branco-550w-2l-lq12/magazineluiza/021775800/67eee70af2060d7680f9824c4afc03b4.jpg',
        name: 'Liquidificador Arno Power Mix Branco 550W',
        lastPrice: 'R$ 149,90',
        price: 'R$ 135,70',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 139,90 em 2x de R$ 69,95 sem juros'
    }, {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-philco-ph900-preto-com-filtro-12-velocidades-1200w/magazineluiza/021749000/b0237589c56370472c8433e02e6398d1.jpg',
        name: 'Liquidificador Philco PH900 Preto com Filtro 12 Velocidades 1200W',
        lastPrice: 'R$ 259,90',
        price: 'R$ 139,00',
        sub: 'NO PIX',
        parcel: 'ou R$ 139,00 em 2x de R$ 69,50 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-mondial-turbo-inox-l-1200-ri-com-filtr-com-filtro-12-velocidades-1200w/magazineluiza/221537600/a43fd6505e3d21e453c028c5f41b1598.jpg',
        name: 'Liquidificador Mondial Turbo Inox L-1200 RI com Filtr',
        lastPrice: 'R$ 289,90',
        price: 'R$ 154,23',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 179,00 em 2x de R$ 89,50 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-mondial-turbo-l-1200-bi-com-filtro-12-velocidades-1200w-inox-preto/magazineluiza/224207100/9801fbec3c9db79471f4fd08c6a5ce7b.jpg',
        name: 'Liquidificador Mondial Turbo L-1200 BI com Filtro 12 Velocidades 1200W Inox Preto',
        lastPrice: 'R$ 249,90',
        price: 'R$ 173,63',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 179,00 em 2x de R$ 89,50 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/280x210/liquidificador-arno-power-mix-branco-550w-2l-lq12/magazineluiza/021775800/67eee70af2060d7680f9824c4afc03b4.jpg',
        name: 'Liquidificador Arno Power Mix Branco 550W',
        lastPrice: 'R$ 149,90',
        price: 'R$ 135,70',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 139,90 em 2x de R$ 69,95 sem juros'
    }
];

var fogoes = [
    {
        image: 'https://a-static.mlcdn.com.br/800x560/fogao-mueller-4-bocas-com-mesa-esmaltada-mfi4bc-mueller-fogoes/tabaratotolevando/15101/ff0a7de24968538fda781eab2705ba68.jpeg',
        name: 'Fogão Mueller 4 Bocas com mesa esmaltada MFI4BC - Mueller Fogões',
        lastPrice: 'R$ 699,90',
        price: 'R$ 678,90',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 699,90 em 5x de R$ 139,98 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/800x560/fogao-5-bocas-mueller-com-mesa-de-vidro-branco-mueller-fogoes/muellerfogoes/610000687/871dc17bdc83d5c1effd2f272697eb5d.jpeg',
        name: 'Fogão 5 Bocas Mueller com Mesa de Vidro Branco - Mueller Fogões',
        lastPrice: 'R$ 1.599,00',
        price: 'R$ 1.189,00',
        sub: 'NO PIX',
        parcel: 'ou R$ 1.189,00 em 9x de R$ 132,11 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/800x560/fogao-cooktop-de-inducao-philco-4-bocas-pct40p-preto-220v/techshop/fogphc00011/f4fbdb07f12cfd77870328dec4320f93.jpeg',
        name: 'Fogão Cooktop De Indução Philco 4 Bocas PCT40P Preto 220v',
        lastPrice: 'R$ 3.999,90',
        price: 'R$ 1.429,90',
        sub: 'NO PIX',
        discount: 'COM 16% DE DESCONTO',
        parcel: 'ou R$ 1.702,26 em 10x de R$ 170,23 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/800x560/cooktop-5-bocas-philco-a-gas-preto-cook-chef-5/magazineluiza/216821500/98c1572627b325d35ea591cc53eb9132.jpg',
        name: 'Fogão de Piso 5 Bocas Brastemp BYR76AR com Mesa de Vidro',
        lastPrice: 'R$  869,90',
        price: 'R$ 479,99',
        sub: 'NO PIX',
        discount: 'COM 4% DE DESCONTO',
        parcel: 'ou R$ 499,99 em 4x de R$ 125,00 sem juros'
    },{
        image: 'https://a-static.mlcdn.com.br/800x560/fogao-mueller-4-bocas-com-mesa-esmaltada-mfi4bc-mueller-fogoes/tabaratotolevando/15101/ff0a7de24968538fda781eab2705ba68.jpeg',
        name: 'Fogão Mueller 4 Bocas com mesa esmaltada MFI4BC - Mueller Fogões',
        lastPrice: 'R$ 699,90',
        price: 'R$ 678,90',
        sub: 'NO PIX',
        discount: 'COM 3% DE DESCONTO',
        parcel: 'ou R$ 699,90 em 5x de R$ 139,98 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/800x560/fogao-5-bocas-mueller-com-mesa-de-vidro-branco-mueller-fogoes/muellerfogoes/610000687/871dc17bdc83d5c1effd2f272697eb5d.jpeg',
        name: 'Fogão 5 Bocas Mueller com Mesa de Vidro Branco - Mueller Fogões',
        lastPrice: 'R$ 1.599,00',
        price: 'R$ 1.189,00',
        sub: 'NO PIX',
        parcel: 'ou R$ 1.189,00 em 9x de R$ 132,11 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/800x560/fogao-cooktop-de-inducao-philco-4-bocas-pct40p-preto-220v/techshop/fogphc00011/f4fbdb07f12cfd77870328dec4320f93.jpeg',
        name: 'Fogão Cooktop De Indução Philco 4 Bocas PCT40P Preto 220v',
        lastPrice: 'R$ 3.999,90',
        price: 'R$ 1.429,90',
        sub: 'NO PIX',
        discount: 'COM 16% DE DESCONTO',
        parcel: 'ou R$ 1.702,26 em 10x de R$ 170,23 sem juros'
    },
    {
        image: 'https://a-static.mlcdn.com.br/800x560/cooktop-5-bocas-philco-a-gas-preto-cook-chef-5/magazineluiza/216821500/98c1572627b325d35ea591cc53eb9132.jpg',
        name: 'Fogão de Piso 5 Bocas Brastemp BYR76AR com Mesa de Vidro',
        lastPrice: 'R$  869,90',
        price: 'R$ 479,99',
        sub: 'NO PIX',
        discount: 'COM 4% DE DESCONTO',
        parcel: 'ou R$ 499,99 em 4x de R$ 125,00 sem juros'
    }
];


    function generateProductHTML(product) {
        var html = '<div class="product">';
        html += '<div class="image" style="background-image: url(\'' + product.image + '\');"></div>';
        html += '<div class="info">';
        html += '<p class="product-name">' + product.name + '</p>';
        html += '<p class="last-price">' + product.lastPrice + '</p>';
        if (product.discount) {
            html += '<p class="product-price">' + product.price + '<span class="sub">' + product.sub + '</span></p>';
            html += '<p class="product-discount">' + product.discount + '</p>';
        } else {
            html += '<p class="product-price mb-4">' + product.price + '<span class="sub">' + product.sub + '</span></p>';
        }
        html += '<p class="product-parcel">' + product.parcel + '</p>';
        html += '</div>';
        html += '</div>';
        return html;
    }

    var $liquidificadoresList = $('#liquidificadores .products');
    liquidificadores.forEach(function (product) {
        $liquidificadoresList.append(generateProductHTML(product));
    });

    var $fogoesList = $('#fogoes .products');
    fogoes.forEach(function (product) {
        $fogoesList.append(generateProductHTML(product));
    });

    $('.section-products').each(function () {
        var $section = $(this);
        var $products = $section.find('.products .product');
        var productWidth = $products.outerWidth(true);
        var currentIndex = 0;
        var totalProducts = $products.length;
        var visibleProducts = Math.floor($section.find('.product-list').width() / productWidth);
        var minIndex = 0;
        var maxIndex = totalProducts - visibleProducts;
        var maxTranslateX = -(totalProducts - visibleProducts) * productWidth;

        function updateButtons() {
            $section.find('.prev').prop('disabled', currentIndex === minIndex);
            $section.find('.next').prop('disabled', currentIndex === maxIndex);
        }

        function moveCarousel() {
            var translateX = -currentIndex * productWidth;
            $products.css('transform', 'translateX(' + translateX + 'px)');
        }

        $section.find('.prev').click(function () {
            if (currentIndex > minIndex) {
                currentIndex--;
                moveCarousel();
                updateButtons();
            }
        });

        $section.find('.next').click(function () {
            if (currentIndex < maxIndex) {
                currentIndex++;
                moveCarousel();
                updateButtons();
            }
        });

        var touchStartX = 0;
        var touchMoveX = 0;

        $products.on('touchstart', function (e) {
            touchStartX = e.originalEvent.touches[0].pageX;
        });

        $products.on('touchmove', function (e) {
            touchMoveX = e.originalEvent.touches[0].pageX;
            var touchDiff = touchStartX - touchMoveX;
            var moveFactor = 1; 

            var newTranslateX = -currentIndex * productWidth - touchDiff * moveFactor;

            newTranslateX = Math.min(0, Math.max(maxTranslateX, newTranslateX));

            $products.css('transform', 'translateX(' + newTranslateX + 'px)');
        });

        $products.on('touchend', function () {
            var touchDiff = touchStartX - touchMoveX;
            var threshold = productWidth / 3;

            if (Math.abs(touchDiff) > threshold) {
                if (touchDiff > 0) {
                    $section.find('.next').click();
                } else {
                    $section.find('.prev').click();
                }
            } else {
                moveCarousel();
            }
        });
        if(totalProducts >= 5){
            updateButtons();
        }
    });

});
