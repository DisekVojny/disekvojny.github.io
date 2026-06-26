#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

DIR="$1"

if [ ! -d "$DIR" ]; then
    echo "Error: '$DIR' is not a directory."
    exit 1
fi

shopt -s nullglob

# Preview lengths (seconds)
DURATIONS=("0.1" "1" "2" "5" "15")

for file in "$DIR"/*.mp3; do
    base=$(basename "$file" .mp3)
    outdir="$DIR/$base"

    mkdir -p "$outdir"

    echo "Processing: $base"

    success=1

    for dur in "${DURATIONS[@]}"; do
        ffmpeg -hide_banner -loglevel error -y \
            -i "$file" \
            -af "silenceremove=start_periods=1:start_duration=0.15:start_threshold=-45dB" \
            -t "$dur" \
            -vn \
            -map_metadata -1 \
            -ac 2 \
            -ar 44100 \
            -c:a libmp3lame \
            -b:a 64k \
            "$outdir/$dur.mp3"

        if [ $? -eq 0 ]; then
            echo "  ✓ $dur.mp3"
        else
            echo "  ✗ Failed to create $dur.mp3"
            success=0
        fi
    done

    if [ $success -eq 1 ]; then
        rm "$file"
        echo "  🗑 Deleted original: $base.mp3"
    else
        echo "  ⚠ Keeping original because one or more previews failed."
    fi
done

echo "Done."