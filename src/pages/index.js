import Header from "@/components/Header";
import HomeInfo from "@/components/HomeInfo";
import Landing from "@/components/Landing";

export default function Home() {

  const styles = {
    main: "min-h-screen items-center flex flex-col max-w-screen overflow-x-hidden",
    div: "flex w-screen flex-col items-start justify-between main-bg 2xl:h-[50rem] h-[40rem]"
  }

  return (
    <main className={styles.main}>
      <title>Welcome To Palestra</title>
      <div className={styles.div}>
        <Header />
        <Landing />
      </div>
      <HomeInfo />
    </main>
  );
}
