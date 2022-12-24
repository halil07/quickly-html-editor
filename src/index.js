import simple from "./simple.js";
const $ = window.$;
const _ = window._;
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
const rootDiv = document.getElementById('root');
const htmlExport = document.getElementById('html-export');
const modalDiv = document.getElementById('content-data');
const compiled = _.template(simple, { 'imports': { 'jq': $ } });
const data = {
    topNews:{
        title: `MODUNUZU YÜKSELTECEK 6 GIDA`,
        image_img: `images/t4_image1.jpg`,
        desc_text: `İyi hissetmenin, z bir bedene sahip olmanın birçok bileşeni olduğu gibi, büyük bir faktörü de tükettiğimiz gıdalardır. İyi uyumanın, egzersiz yapmanın, vücuttaki vitamin ve mineral eksikliklerini tamamlamanın ve stresle başa çıkmanın yanı sıra iyi beslenme de bunun en önemli parçasıdır. Özellikle bazı gıdalar da vardır ki, vücutta üretilen mutluluk hormonlarını biraz daha fazla harekete geçirir.`,
        desc2_text: `Dünya Sağlık Örgütü endişe, depresyon gibi yoğun duygusal semptomlar yaşayan insanların sayısının son yıllarda çok daha fazla arttığını belirtiyor [1]. Güzel haber de şu ki; sofralarımızdan başlayarak yaşam tarzı değişiklikleriyle, akıl ve ruh sağlığımızı koruyabilir, d yaş alabiliriz. Sofralarımızdaki bu gıdaların ne olduğuna ve modumuzu nasıl yükseltebileceğine biraz daha yakından bakalım.`,
        buttonText: `moduna göre gıdaları keşfet`,
        buttonLink: `https://www.google.com.tr`
    },
    section1: [
        {
            image_img: `images/t4_image2.jpg`,
            title: `1- Fermante Gıdalar`,
            _text: `Bizler bu gıdalara çok uzun yıllardır sofralarımızda yer veririz. Aile büyüklerimiz yoğurt mayalar, çeşit çeşit sirke yapar, kefir mayalar, turşu kurarmış. Bunların şifası hep bilinir, hep bol bol tüketilirmiş. Son zamanlarda genelde bağırsak sağlığı için duyduğumuz ve marketlerde, restoranlarda karşımıza çıkan kimchi, kombucha, pancar kvass ve miso gibi gıdaları da bu kategori içine koyabilir, bunların her birine fermente gıda diyebiliriz,yani mayalanan gıda. `,
            buttonText: `Alışverişe Başla`,
            buttonLink: `https://www.google.com.tr`
        },
        {
            image_img: `images/t4_image2.jpg`,
            title: `1- Fermante Gıdalar`,
            _text: `Bizler bu gıdalara çok uzun yıllardır sofralarımızda yer veririz. Aile büyüklerimiz yoğurt mayalar, çeşit çeşit sirke yapar, kefir mayalar, turşu kurarmış. Bunların şifası hep bilinir, hep bol bol tüketilirmiş. Son zamanlarda genelde bağırsak sağlığı için duyduğumuz ve marketlerde, restoranlarda karşımıza çıkan kimchi, kombucha, pancar kvass ve miso gibi gıdaları da bu kategori içine koyabilir, bunların her birine fermente gıda diyebiliriz,yani mayalanan gıda. `,
            buttonText: `Alışverişe Başla`,
            buttonLink: `https://www.google.com.tr`
        }
    ],
    section2: [
        {
            image_img: `images/t4_image2.jpg`,
            title: `1- Fermante Gıdalar`,
            _text: `Bizler bu gıdalara çok uzun yıllardır sofralarımızda yer veririz. Aile büyüklerimiz yoğurt mayalar, çeşit çeşit sirke yapar, kefir mayalar, turşu kurarmış. Bunların şifası hep bilinir, hep bol bol tüketilirmiş. Son zamanlarda genelde bağırsak sağlığı için duyduğumuz ve marketlerde, restoranlarda karşımıza çıkan kimchi, kombucha, pancar kvass ve miso gibi gıdaları da bu kategori içine koyabilir, bunların her birine fermente gıda diyebiliriz,yani mayalanan gıda. `,
            buttonText: `Alışverişe Başla`,
            buttonLink: `https://www.google.com.tr`
        },
        {
            image_img: `images/t4_image2.jpg`,
            title: `1- Fermante Gıdalar`,
            _text: `Bizler bu gıdalara çok uzun yıllardır sofralarımızda yer veririz. Aile büyüklerimiz yoğurt mayalar, çeşit çeşit sirke yapar, kefir mayalar, turşu kurarmış. Bunların şifası hep bilinir, hep bol bol tüketilirmiş. Son zamanlarda genelde bağırsak sağlığı için duyduğumuz ve marketlerde, restoranlarda karşımıza çıkan kimchi, kombucha, pancar kvass ve miso gibi gıdaları da bu kategori içine koyabilir, bunların her birine fermente gıda diyebiliriz,yani mayalanan gıda. `,
            buttonText: `Alışverişe Başla`,
            buttonLink: `https://www.google.com.tr`
        }
    ],
    section3: [
        {
            image_img: `images/t4_image2.jpg`,
            title: `1- Fermante Gıdalar`,
            _text: `Bizler bu gıdalara çok uzun yıllardır sofralarımızda yer veririz. Aile büyüklerimiz yoğurt mayalar, çeşit çeşit sirke yapar, kefir mayalar, turşu kurarmış. Bunların şifası hep bilinir, hep bol bol tüketilirmiş. Son zamanlarda genelde bağırsak sağlığı için duyduğumuz ve marketlerde, restoranlarda karşımıza çıkan kimchi, kombucha, pancar kvass ve miso gibi gıdaları da bu kategori içine koyabilir, bunların her birine fermente gıda diyebiliriz,yani mayalanan gıda. `,
            buttonText: `Alışverişe Başla`,
            buttonLink: `https://www.google.com.tr`
        },
        {
            image_img: `images/t4_image2.jpg`,
            title: `1- Fermante Gıdalar`,
            _text: `Bizler bu gıdalara çok uzun yıllardır sofralarımızda yer veririz. Aile büyüklerimiz yoğurt mayalar, çeşit çeşit sirke yapar, kefir mayalar, turşu kurarmış. Bunların şifası hep bilinir, hep bol bol tüketilirmiş. Son zamanlarda genelde bağırsak sağlığı için duyduğumuz ve marketlerde, restoranlarda karşımıza çıkan kimchi, kombucha, pancar kvass ve miso gibi gıdaları da bu kategori içine koyabilir, bunların her birine fermente gıda diyebiliriz,yani mayalanan gıda. `,
            buttonText: `Alışverişe Başla`,
            buttonLink: `https://www.google.com.tr`
        }
    ],
    sectionMain:{
        title: `VE SÜRDÜRÜLEBİLİR BİR YAŞAM İÇİN BONA LİVA SENİNLE!`,
        buttonText: `Alışverişe Başla`,
        buttonLink: `https://www.google.com.tr`
    }
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const render = () => {
    const output = compiled(data);
    rootDiv.innerHTML = output;
}
const inputs = [];
const names = [];
const renderInput = (type, value) => {
    const types = type.split('_')[1];
    let input;
    if(!types){
        input = document.createElement('input');
        input.type ='text';
        input.value = value;
    }
    if(types === 'img'){
        input = document.createElement('input');
        input.type ='file';
    }
    if(types === 'text'){
        input = document.createElement('textarea');
        input.value = value;
    }
    input.classList.add("form-control")
    input.classList.add("form-control-lg")
    input.classList.add("mb-3")
    return {input, type: types};
}
Object.entries(data).forEach(val => {
    const [key, value] = val;
    names.push(key);
    if(value.length){
        const formItems = [];
        value.forEach((dValue, index) => {
            const formItems2 = [];
            Object.keys(dValue).forEach(items => {
                const ddValue = dValue[items];
                const {input, type} = renderInput(items, ddValue);
                input.oninput = (e) => {
                    if(type === 'img'){
                        toBase64(e.target.files[0]).then((image) => {
                            data[key][index][items] = image;
                            render();
                        })
                    }else{
                        data[key][index][items] = e.target.value
                    }

                    render();
                }
                formItems2.push({
                    title: items,
                    input
                })
            });
            formItems.push(formItems2)
        })
        inputs.push(formItems);
    }else{
        const formItems = [];
        Object.keys(value).forEach(items => {
            const dvalue = value[items];
            const {input, type} = renderInput(items, dvalue);
            input.oninput = (e) => {
                if(type === 'img'){
                    toBase64(e.target.files[0]).then((image) => {
                        data[key][items] = image;
                        render();
                    })
                }else{
                    data[key][items] = e.target.value;
                }

                render();
            }
            formItems.push({
                title: items,
                input
            })
        })
        inputs.push(formItems);
    }
})
const inputDiv = document.createElement('div');

const inputRender = (formItem) => {
    const wrap = document.createElement('div');
    const title = document.createElement('div');
    title.innerText = formItem.title;
    const input = document.createElement('div');
    input.append(formItem.input);
    wrap.append(title, input)
    return wrap;
}
inputs.forEach((input, index) => {
    const name = names[index];
    const formItemsDiv = document.createElement('div');
    const b = document.createElement('a');
    b.role = 'button';
    b.dataset.bsToggle = 'collapse';
    b.href = '#' + name;
    b.classList.add('btn')
    b.classList.add('btn-primary')
    b.innerText = name;
    formItemsDiv.append(b);
    const content = document.createElement('div');
    content.classList.add('collapse');
    content.id = name;
    input.forEach((formItems) => {
        if(formItems.length){
            formItems.forEach(formItem => {
                const res= inputRender(formItem);
                content.append(res);
            })
        }else{
            const res= inputRender(formItems);
            content.append(res);
        }
    })
    inputDiv.append(formItemsDiv, content)
})
modalDiv.append(inputDiv)

htmlExport.onclick = () => {
    const output = compiled(data);
    navigator.clipboard.writeText(output).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}
render()
