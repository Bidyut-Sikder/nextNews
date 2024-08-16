

import ModalBackdrop from "@/components/modal-backdrop";

import { getNewsItem } from "@/lib/news";

import { notFound } from "next/navigation";



const InterceptedImagePage = async ({ params }) => {



    const { slug } = params

    const newsItem = await getNewsItem(slug)

    if (!newsItem) {
        notFound()
    }

    return (
        <>


            <ModalBackdrop />

            <dialog className="modal" open>
                <div className="fullscreen-image">

                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />

                </div>
            </dialog>


        </>
    );
};


export default InterceptedImagePage;