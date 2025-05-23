"""Core CLI entry point."""

from utils.helpers import normalize_url


def main():
    """Entry point for the core CLI."""
    # Example usage of a helper function
    _ = normalize_url("example.com")
    print("Core loaded")


if __name__ == "__main__":
    main()
