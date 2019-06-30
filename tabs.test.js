test('when clicking a tab makes it active', () => {

    document.body.innerHTML = 
        `<ul class="tabs__menu">
            <li class="tabs__item"><a class="tab1 tabs__anchor tabs__anchor-active" href="#">Terminal 1</a></li>
            <li class="tabs__item"><a class="tab2 tabs__anchor" href="#">Terminal 2</a></li>
            <li class="tabs__item"><a class="tab3 tabs__anchor" href="#">Terminal 3</a></li>
        </ul>`;

        const allAnchor = document.getElementsByClassName("tabs__anchor");

        Array.from(allAnchor).map((anchor, i) => {

            anchor.addEventListener("click",(event) => { 
                Array.from(allAnchor).map((anchor) => {
                    anchor.classList.remove("tabs__anchor-active");
                });
        
                event.target.classList.add("tabs__anchor-active");
            });
        
        });
            
        document.querySelector('.tab3').click();

        expect(document.querySelector('.tab3').classList).toContain('tabs__anchor-active');
        expect(document.querySelector('.tab1').classList).not.toContain('tabs__anchor-active');
        expect(document.querySelector('.tab2').classList).not.toContain('tabs__anchor-active');
});

test('when clicking a tab makes content display', () => {

    document.body.innerHTML = 
        `<ul class="tabs__menu">
            <li class="tabs__item"><a class="tab1 tabs__anchor tabs__anchor-active" href="#">Terminal 1</a></li>
            <li class="tabs__item"><a class="tab2 tabs__anchor" href="#">Terminal 2</a></li>
            <li class="tabs__item"><a class="tab3 tabs__anchor" href="#">Terminal 3</a></li>
        </ul>
        <div class="container">
            <div class="content1 tabs__content tabs__content-active">
                <h1>content 1</h1>
            </div>
            <div class="content2 tabs__content">
                <h1>content 2</h1>
            </div>
            <div class="content3 tabs__content">
                <h1>content 3</h1>
            </div>
        </div>`;


    const allAnchor = document.getElementsByClassName("tabs__anchor");
    const allContent = document.querySelectorAll(".tabs__content");

    Array.from(allAnchor).map((anchor, i) => {
        anchor.addEventListener("click",(event) => { 
            Array.from(allAnchor).map((anchor) => {
                anchor.classList.remove("tabs__anchor-active");
            });

            Array.from(allContent).map((content) => {
                content.classList.remove("tabs__content-active");
            });

            event.target.classList.add("tabs__anchor-active");
            allContent[i].classList.add("tabs__content-active");
        });
    });

    document.querySelector('.tab3').click();

    expect(document.querySelector('.content3').classList).toContain('tabs__content-active');
    expect(document.querySelector('.content1').classList).not.toContain('tabs__content-active');
    expect(document.querySelector('.content2').classList).not.toContain('tabs__content-active');
});