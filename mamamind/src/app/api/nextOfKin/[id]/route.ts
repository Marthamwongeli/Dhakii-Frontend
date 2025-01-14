

const baseUrl = process.env.BASE_URL;

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  console.log({ baseUrl });

  if (!id || isNaN(Number(id))) {
    return new Response('Valid Next of Kin ID is required', {
      status: 400,
    });
  }

  try {
    const res = await fetch(`${baseUrl}/api/nextofkins/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Fetch Response:', res);

    if (!res.ok) {
      return new Response(`Error: ${res.statusText}`, {
        status: res.status,
      });
    }

    const nextOfKinData = await res.json();
    return new Response(JSON.stringify(nextOfKinData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching next of kin data:', error);

    return new Response(`Server error: ${(error as Error).message}`, {
      status: 500,
    });
  }
}
