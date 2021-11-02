import { controller } from 'controllerim';
import {useEffect} from "react";

class _SectionWorksController {

    constructor() {
        // STATIC DATA
        this.dataCategories = [
            {
                id: 1,
                title: "Everything",
            },
            {
                id: 2,
                title: "Creative",
            },
            {
                id: 3,
                title: "Art",
            },
            {
                id: 4,
                title: "Design",
            },
            {
                id: 5,
                title: "Branding",
            },
        ];
        this.dataWorks = [
            {
                id: 1,
                title: "Project Managment Illustration",
                category: 3,
                image: "1.svg",
                link: "/single-work-example",
            },
            {
                id: 2,
                title: "Guest App Walkthrough Screens",
                category: 2,
                image: "2.svg",
                link: "/single-work-example",
            },
            {
                id: 3,
                title: "Delivery App Wireframe",
                category: 5,
                image: "3.svg",
                link: "/single-work-example",
            },
            {
                id: 4,
                title: "Onboarding Motivation",
                category: 2,
                image: "4.svg",
                link: "/single-work-example",
            },
            {
                id: 5,
                title: "iMac Mockup Design",
                category: 3,
                image: "5.svg",
                link: "/single-work-example",
            },
            {
                id: 6,
                title: "Game Store App Concept",
                category: 4,
                image: "6.svg",
                link: "/single-work-example",
            },
            {
                id: 7,
                title: "Project Managment Illustration",
                category: 3,
                image: "3.svg",
                link: "/single-work-example",
            },
            {
                id: 8,
                title: "Guest App Walkthrough Screens",
                category: 4,
                image: "1.svg",
                link: "/single-work-example",
            },
            {
                id: 9,
                title: "Delivery App Wireframe",
                category: 5,
                image: "4.svg",
                link: "/single-work-example",
            },
            {
                id: 10,
                title: "Game Store App Concept",
                category: 4,
                image: "6.svg",
                link: "/single-work-example",
            },
            {
                id: 11,
                title: "Project Managment Illustration",
                category: 3,
                image: "3.svg",
                link: "/single-work-example",
            },
            {
                id: 12,
                title: "Guest App Walkthrough Screens",
                category: 4,
                image: "1.svg",
                link: "/single-work-example",
            },
            {
                id: 13,
                title: "Delivery App Wireframe",
                category: 5,
                image: "4.svg",
                link: "/single-work-example",
            },
        ];

        this.state = {
            items: this.dataWorks,
            visibleCount: 6,
            increment: 3,
            activeFilter: "",
            visibleItems: [],
            noMorePost: false
        };
    }

    setActiveFilter(value) {
        this.state.activeFilter = value;
    }

    setVisibleItems(value) {
        this.state.visibleItems = value;
    }

    setVisibleCount(value) {
        this.state.visibleCount = value;
    }

    setNoMorePost(value) {
        this.state.noMorePost = value;
    }

    handleChange(e) {
        e.preventDefault();
        this.setActiveFilter(parseInt(e.target.attributes.category.nodeValue));
        let tempData;
        if (parseInt(e.target.attributes.category.nodeValue) === this.dataCategories[0].id) {
            tempData = this.state.items.filter((data) => data.id <= this.state.visibleCount);
        } else {
            tempData = this.state.items.filter(
                (data) =>
                    data.category === parseInt(e.target.attributes.category.nodeValue) && data.id <= this.state.visibleCount
            );
        }
        this.setVisibleItems(tempData);
    };

    handleLoadMore(e) {
        e.preventDefault();
        let tempCount = this.state.visibleCount + this.state.increment;
        if (this.state.visibleCount >= this.state.items.length) {
            this.setNoMorePost(true);
        } else {
            this.setVisibleCount(tempCount);
            if (this.state.activeFilter === this.dataCategories[0].id) {
                this.setVisibleItems(this.state.items.filter((data) => data.id <= tempCount));
            } else {
                this.setVisibleItems(
                    this.state.items.filter(
                        (data) => data.category === this.state.activeFilter && data.id <= tempCount
                    )
                );
            }
            if (this.state.visibleCount >= this.state.items.length) {
                this.setNoMorePost(true);
            }
        }
    };

}

export const SectionWorksController = controller(_SectionWorksController);