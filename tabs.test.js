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