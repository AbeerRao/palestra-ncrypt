import Header from "@/components/Header";
import HomeInfo from "@/components/HomeInfo";
import Landing from "@/components/Landing";

export default function Home() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
  }

  if (typeof window !== "undefined") {
      window.addEventListener("scroll", reveal);
      reveal();
  }

  const styles = {
    main: "min-h-screen items-center flex flex-col max-w-screen overflow-x-hidden",
    div: "flex w-screen flex-col items-start justify-between main-bg reveal 2xl:h-[50rem] h-[40rem]"
  }

  return (
    <main className={styles.main}>
      <title>Welcome To Palestra</title>
      <div className={styles.div}>
        <Header loginDisplay={true} />
        <Landing />
      </div>
      <HomeInfo />
    </main>
  );
}
