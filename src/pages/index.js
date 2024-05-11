import Header from "@/components/Header";
import Landing from "@/components/Landing";

export default function Home() {

  const styles = {
    main: "min-h-screen items-center flex flex-col",
    div: "flex w-screen flex-col items-start justify-between main-bg h-[50rem]"
  }

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <Header />
        <Landing />
      </div>
    </main>
  );
}
