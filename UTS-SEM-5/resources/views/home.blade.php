@extends('welcome')

@section('Judul_Halaman')
    halaman_home
@endsection


@section('konten')
    <div class="container-fluid bg-secondary w-75 p-2 mb-4">
        <div class="">
            <h1 class="text-white">Book List</h1>
        </div>
    </div>

    <div class="row">

        @foreach ($books as $buku)
            <div class="col-md-3 mb-4">
                <div class="border p-3">
                    <img class="w-100" src="{{ $buku->image }}" alt="">
                    <p>{{ $buku->title }}</p>
                    <p>By</p>
                    <p>{{ $buku->author }}</p>
                    <a class="btn btn-primary" href="{{ url('/detail/' . $buku->id) }}">Detail</a>
                </div>
            </div>
        @endforeach

    </div>
@endsection
