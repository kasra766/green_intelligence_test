import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

interface formDataType {
  uname: string;
  pass: string;
}
export function useSubmit() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const submit = async (data: formDataType) => {
    try {
      const res = await fetch("/api/test/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await res.json();
      console.log(JSON.stringify(resData, null, 2));

      if (res.status === 200) {
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve("");
          }, 500);
        });

        enqueueSnackbar("submit data success", { variant: "success" });
        await promise;

        // loginInfo.set(resData);

        const url = new URL("http://localhost:3000/");
        url.searchParams.set("ticket", resData.ticket);
        url.searchParams.set("name", resData.name);
        url.searchParams.set("Lname", resData.Lname);
        console.log(url);

        router.replace(url.href);
      } else {
        enqueueSnackbar(resData.message, { variant: "error" });
        throw new Error("something is wrong: " + res.status);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { submit };
}
